
# User and Video Mongoose Schemas

## 1. User Schema

This code defines a Mongoose schema and model for a "User" in a MongoDB database using Node.js.

### Importing Mongoose and Schema
```javascript
import mongoose, { Schema } from "mongoose";
```
- **mongoose** is a library that lets you interact with MongoDB using an object-oriented approach.
- **Schema** is a Mongoose object used to define the structure of documents in a particular collection.

### Defining the User Schema
The `userSchema` object specifies the structure and data types for each field in a "User" document.

#### Schema Fields:
- **username**:
  - Type: `String`
  - Properties:
    - `required: true`: Must be provided.
    - `unique: true`: Each username must be different.
    - `lowercase: true`: Automatically converts to lowercase.
    - `trim: true`: Removes extra spaces.
    - `index: true`: Optimizes the field for faster searching.
- **email**:
  - Type: `String`
  - Properties:
    - `required: true`: Must be provided.
    - `unique: true`: Each email must be different.
    - `lowercase: true`: Automatically converts to lowercase.
    - `trim: true`: Removes extra spaces.
- **fullname**:
  - Type: `String`
  - Properties:
    - `required: true`: Must be provided.
    - `trim: true`: Removes extra spaces.
    - `index: true`: Optimizes for searching.
- **avatar**:
  - Type: `String`
  - Description: Stores a URL for the user’s profile picture from a service like Cloudinary.
  - Properties:
    - `required: true`: Must be provided.
- **coverImg**:
  - Type: `String`
  - Description: Stores a URL for the user's cover image.
- **watchHistory**:
  - Type: Array of `ObjectId` values.
  - Description: References to "Video" documents by their IDs.
- **password**:
  - Type: `String`
  - Properties:
    - `required: true`: Must be provided, with a custom error message.
- **refreshToken**:
  - Type: `String`
  - Description: Used for token-based authentication.

### Timestamps Option
```javascript
{ timestamps: true }
```
- Mongoose automatically adds `createdAt` and `updatedAt` fields to the document.

### Creating the User Model
```javascript
export const User = mongoose.model("User", userSchema);
```
- This line creates a model called "User" based on `userSchema`, allowing you to interact with the "User" collection in MongoDB.

---

## 2. Video Schema

This code defines a Mongoose schema and model for a "Video" in a MongoDB database, with pagination support through the `mongoose-aggregate-paginate-v2` plugin.

### Importing Modules
```javascript
import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
```
- **mongoose**: The library that allows you to interact with MongoDB in a structured way.
- **mongoose-aggregate-paginate-v2**: A Mongoose plugin that adds pagination capabilities to aggregate queries.

### Defining the Video Schema
The `videoSchema` object specifies the structure and data types for each field in a "Video" document.

#### Schema Fields:
- **videoFile**:
  - Type: `String`
  - Description: Stores the URL for the video file (from Cloudinary).
  - Properties:
    - `required: true`: The field is mandatory.
- **thumbnail**:
  - Type: `String`
  - Description: Stores the URL for the video's thumbnail image.
  - Properties:
    - `required: true`: This field is mandatory.
- **title**:
  - Type: `String`
  - Description: The title of the video.
  - Properties:
    - `required: true`: The field is mandatory.
- **description**:
  - Type: `String`
  - Description: A brief description of the video content.
  - Properties:
    - `required: true`: The field is mandatory.
- **duration**:
  - Type: `Number`
  - Description: The video's length, likely in seconds.
  - Properties:
    - `required: true`: The field is mandatory.
- **views**:
  - Type: `Number`
  - Description: The number of views the video has received.
  - Properties:
    - `default: 0`: Defaults to zero if not specified.
- **isPublished**:
  - Type: `Boolean`
  - Description: Indicates if the video is published or not.
  - Properties:
    - `default: true`: By default, the video is considered published.
- **owner**:
  - Type: `Schema.Types.ObjectId`
  - Description: A reference to the "User" who uploaded the video.
  - Properties:
    - `ref: "User"`: Establishes a relationship with the "User" model.

### Timestamps Option
```javascript
{ timestamps: true }
```
- Adds `createdAt` and `updatedAt` fields to each "Video" document, which are automatically managed by Mongoose.

### Adding Pagination Plugin
```javascript
videoSchema.plugin(mongooseAggregatePaginate);
```
- This line activates the pagination functionality provided by `mongoose-aggregate-paginate-v2` for aggregate queries, making it easy to paginate video records.

### Creating the Video Model
```javascript
export const Video = mongoose.model("Video", videoSchema);
```
- This line creates a "Video" model based on `videoSchema`, allowing you to perform database operations on the "Video" collection.
