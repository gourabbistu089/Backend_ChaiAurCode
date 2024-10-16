import Book from '../models/bookModel.js';
import { ApiError } from '../utils/ApiError.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import ApiResponse from '../utils/ApiResponse.js';

// Get all books
export const getBooks = asyncHandler(async (req, res) => {
    const books = await Book.find();
    res.status(200).json(new ApiResponse(200, books));
});

// Get a book by ID
export const getBookById = asyncHandler(async (req, res) => {
    const book = await Book.findById(req.params.id);
    if (!book) {
        throw new ApiError(404, 'Book not found');
    }
    res.status(200).json(new ApiResponse(200, book));
});

// Create a new book
export const createBook = asyncHandler(async (req, res) => {
    const { title, author, publishedDate } = req.body;
    const newBook = new Book({ title, author, publishedDate });
    await newBook.save();
    res.status(201).json(new ApiResponse(201, newBook));
});

// Update a book
export const updateBook = asyncHandler(async (req, res) => {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!book) {
        throw new ApiError(404, 'Book not found');
    }
    res.status(200).json(new ApiResponse(200, book));
});

// Delete a book
export const deleteBook = asyncHandler(async (req, res) => {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) {
        throw new ApiError(404, 'Book not found');
    }
    res.status(200).json(new ApiResponse(200, null, 'Book deleted'));
});
