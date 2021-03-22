## Scripts Command Example

```json

{
  "scripts": {
    "arc": "dotenv -e .env arc uuid",
    "arc:integrate:architect:all": "dotenv -e .env arc integrate architect './docs/*.md'",
    "arc:integrate:catalog": "dotenv -e .env arc integrate catalog ./docs/catalog.yaml"
  },
  "dependencies": {
    "arc": "https://github.com/inkusu/arc.git",
    "dotenv-cli": "4.0.0"
  }
}

```
