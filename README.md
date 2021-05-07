# Simple Image API

## Requirements

Create an API to manage photos for an album. Since the client has many photos, they also require a photo to be able to be marked as “favorite”. This API should follow RESTful design patterns and support the following actions for a Photo model:
- Upload a photo
- Edit a photo
- Get a specific photo
- Get a list of photos (paginated), with the ability to optionally filter by name or/and by
favorite status
- Switch a specific photo’s favorite status (on or off)


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
