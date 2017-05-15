# Studentkortet

## Configuration

Setup your information in [config.js](./www/js/config.js).

```json
{
  "nation": "Malmö Nation",
  "union": "Akademiska förening",
  "domain": "Teknolog",
  "name": "Förnamn Efternamn",
  "ssn": "XXXXXX-XXXX",
  "card": "6032 9213 8815 6254",
  "pick": "773605"
}
```

## Deployment

* Install the cordova CLI

  ```shell
  npm install -g cordova
  ```

* Deploy to device

  ```shell
  # iOS
  cordova run ios --device

  # Android
  cordova run android --device
  ```

## Disclaimer

Use at your own risk.
