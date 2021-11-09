# check-prod-freeze

This action validate production deployment window with freeze window ( 16:00 to 18:00 CET ).

### Inputs

#### `env`

**Required** The environment qa|prod expected values in lowercase. Default `"null"`.

#### `force_deploy`

**Required** Set to True if override production freeze window. Default `"false"`.

#### `freezeStart`

**Required** Set freeze start time in HH:MM formate. Default Timezone is CET.

#### `freezeEnd`

**Required**  Set freeze end time in HH:MM formate. Default Timezone is CET.

### Example usage
```
uses: actions/check-prod-freeze@v1.0
with:
  env: 'prod'
  force_deploy: false
  freezeStart: "10:00"
  freezeEnd: "12:00"
```
