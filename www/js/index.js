var bus = new Vue();

Vue.component('flip-container', {
  template: '#template-flip',
  data: function () {
    return { isFlipped: false };
  },
  methods: {
    flip: function () {
      this.isFlipped = !this.isFlipped;
    }
  },
  mounted: function () {
    bus.$on('refresh', () => this.isFlipped = false);
  }
});

Vue.component('student-card', {
  template: '#template-card',
  props: [
    'nation',
    'union',
    'domain',
    'name',
    'ssn',
    'card',
    'pick',
  ],
  data: function () {
    return { scale: null };
  },
  computed: {
    term: function () {
      var date = moment();
      var isFirstTerm = (date.month() < 10);

      return {
        current: (isFirstTerm ? 'VT' : 'HT') + ' ' + date.year(),
        start: isFirstTerm ? date.format('YYYY-01-01') : date.format('YYYY-07-01'),
        end: isFirstTerm ? date.format('YYYY-09-30') : date.add(1, 'year').format('YYYY-02-28'),
      };
    },
  },
  methods: {
    onResize: function () {
      var parent = this.$refs.person.parentElement;

      this.scale = {
        transformOrigin: parent.clientWidth / 2 + 'px',
        width: parent.clientHeight + 'px',
        height: parent.clientWidth + 'px',
      };
    },
  },
  mounted: function () {
    window.addEventListener('resize', this.onResize.bind(this));
    this.onResize();
  },
  beforeDestroy: function () {
    window.removeEventListener('resize', this.onResize.bind(this));
  }
});

var app = new Vue({
  el: '#app',
  data: {
    isFlipped: false,
    isLoading: false,
    student: Config,
  },
  methods: {
    onRefresh: function () {
      if (!this.isLoading) {
        this.isLoading = true;
        setTimeout(() => {
          bus.$emit('refresh');
          this.isFlipped = false;
          this.isLoading = false;
        }, 1000);
      }
    }
  }
});
