# Simple Image API

Simple API to manage photos for an album.

# Setup
1. Run `yarn` to install dependencies 
2. Create `.env` file with MONGO_URI
3. Run `yarn start`

## Requirements

- Upload a photo with file size & file type validation -> Done
- Edit a photo -> Done
- Get a specific photo -> Done
- Get a list of photos (paginated), with the ability to optionally filter by name or/and by
favorite status
- Switch a specific photo’s favorite status (on or off) -> Done


Photo Model:
```
{
  _id: uuid,
  url: string,
  createdAt: date/time,
  updatedAt: date/time,
  name: string,
  description: string,
  favorite?: boolean,
}
```


Validation requirements:
- Only image files can be uploaded
- File must be under 1MB in size


# API 

| Route      | HTTP Method | Description                |
| ---------- | ----------- | -------------------------- |
| /photo     | POST        | Upload a new photo         |
| /photo     | GET         | Get all photos (paginated) |
| /photo/:id | GET         | Gets a specific photo      |
| /photo/:id | PATCH       | Edit a specific photo      |
| /photo/:id | POST        | Favorites a specific photo |



