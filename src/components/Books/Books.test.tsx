import {render, screen } from '@testing-library/react';
import Books from './Books';
import { fetchAllBooks } from '../../services';
import { ignoreActWarnings } from '../../utils/testUtils';
import booksMock from '../../../public/mockData/books.json';
jest.mock('../../services');
const fetchAllBooksMock = fetchAllBooks as jest.Mock;

describe("Book component", () => {

    describe("When loading", () => {
        ignoreActWarnings();
    
        it("renders loading while fetching the books", () => {
            render(<Books />);

            expect(screen.getByText("Loading...")).toBeInTheDocument();
        });
    });

    describe("When data is loaded", () => {

        it("renders books", async () => {
            fetchAllBooksMock.mockResolvedValue(booksMock);

            render(<Books />);
            
            expect(await screen.findByRole('heading', {name: booksMock[0].title})).toBeInTheDocument();
        });
    });

    describe("When no books are found", () => {

        it("renders error message", async () => {
            fetchAllBooksMock.mockRejectedValue(new Error('Error fetching data: '));

            render(<Books />);

            expect(await screen.findByText('Sorry, no books found!')).toBeInTheDocument();
        });
    });
    
});

