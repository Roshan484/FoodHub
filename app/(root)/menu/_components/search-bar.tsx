import { useState, FormEvent } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

interface SearchBarProps {
	onSearch: (query: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
	const [query, setQuery] = useState("");

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		onSearch(query);
	};

	return (
		<form onSubmit={handleSubmit} className="flex gap-2">
			<Input
				type="text"
				placeholder="Search for dishes..."
				value={query}
				onChange={(e) => setQuery(e.target.value)}
				className="flex-grow outline-none border-neutral-400 border"
			/>
			<Input
				type="text"
				placeholder="Search for restaurants..."
				value={query}
				onChange={(e) => setQuery(e.target.value)}
				className="flex-grow outline-none border-neutral-400 border"
			/>
			<Button type="submit">
				<Search className="h-4 w-4 mr-2" />
				Search
			</Button>
		</form>
	);
}
