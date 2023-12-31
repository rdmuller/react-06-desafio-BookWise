"use client";

import { SearchForm } from "../../../components/SearchForm";
import { BookSimpleCard } from "../../../components/SimpleCard";
import { TagBar } from "../../../components/TagBar";
import axios from "axios";
import { useEffect, useState } from "react";
import { BookDetails } from "./BookDetails";
//import { useSession } from "next-auth/react";

interface Category {
	id: string,
	name: string
}

interface BookListProps {
	categories: Category[]
}

interface Book {
	book_id: string, 
	name: string,
	cover_url: string,
	author: string,
	avg_rate: number
}

export function BookList({ categories }: BookListProps) {
	const [selectedTags, setSelectedTags] = useState<string[]>([]);
	const [searchText, setSearchText] = useState("");
	const [books, setBooks] = useState<Book[]>([]);
	const [showBookDetails, setShowBookDetails] = useState(false);
	const [bookId, setBookId] = useState("");
	//const { data: session } = useSession();
	//console.log(JSON.stringify(session));

	useEffect(() => {
		const fetchData = async () => {
			try {
				//const listBooks: Book[] = await fetch(`${process.env.NEXT_URL}/api/books`)
				//	.then(res => res.json())
				//	.then(data => data.books);
				
				const tagsConcatenated: string = selectedTags.length > 0 ? selectedTags.reduce((acc, tag) => acc + "," + tag ) : "";
				
				const listBooks = await axios.get("/api/books", {
					params: {
						searchText: searchText,
						tags: tagsConcatenated
					}
				})
					.then(res => res.data.books);

				setBooks(listBooks);
			} catch (error) {
				console.error("Erro buscando dados: ", error);
			}
		};

		fetchData();
	}, [searchText, selectedTags]);
	
	function handleShowBookDetails(id: string) {
		setBookId(id);
		setShowBookDetails(true);
	}

	function handleCloseBookDetails() {
		setShowBookDetails(false);
	}

	return (
		<div className="flex flex-col">
			<SearchForm onSearchSubmit={setSearchText} className="flex absolute top-0 right-0 w-[27rem]" />

			<TagBar categories={categories} selectedTags={selectedTags} onSetSelectedTags={setSelectedTags} />

			<div className="top-44 pt-1 pl-1 flex flex-row flex-wrap gap-5 overflow-y-auto bottom-0 absolute">
				{books.map(book => {
					return (
						<div key={book.book_id} className="flex flex-col h-[11.5rem] w-[19.5rem]">
							<BookSimpleCard 
								id={book.book_id} 
								onClickCard={handleShowBookDetails} 
								author={book.author}
								name={book.name} 
								avgRate={book.avg_rate} 
								coverUrl={book.cover_url} 
							/>
						</div>
					);
				})}
			</div>
			{showBookDetails && <BookDetails bookId={bookId} onCloseDetails={handleCloseBookDetails} />}
		</div>
	);
}