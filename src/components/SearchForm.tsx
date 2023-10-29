"use client";
import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr/MagnifyingGlass";
import { ComponentProps, ElementRef, forwardRef } from "react";

type SearchFormProps = ComponentProps<"form"> 

export const SearchForm = forwardRef<ElementRef<"form">, SearchFormProps>(
	({...props}: SearchFormProps, ref) => {
		return (
			<form {...props} ref={ref}>
				<div className="flex flex-row gap-2 border border-gray-500 text-gray-500 rounded-[0.25rem] flex-1 px-5 py-[0.875rem] [&:has(input:focus)]:border-green-200 [&:has(input:focus)]:text-green-200 items-center">
					<input type="text" className="text-gray-400 text-sm leading-base bg-transparent border-none focus:outline-0 flex-1 focus:text-gray-200" />
					<MagnifyingGlass size={20} />
				</div>
			</form>
		);
	}
);

SearchForm.displayName = "SearchForm";


/*
export const SearchFormContainer = styled.form`
    margin-top: 4.5rem;
    margin-bottom: 3rem;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    > div {
        display: flex;
        justify-content: space-between;
    }

    span {
        color: ${props => props.theme["base-span"]};
        font-size: 0.875rem;
    }

    input {
        flex: 1;
        border-radius: 6px;
        padding: 12px 16px;
        border: 1px solid ${props => props.theme["base-border"]};
        color: ${props => props.theme["base-text"]};
        font-size: 1rem;
        font-weight: 400;
        background-color: ${props => props.theme["base-input"]};

        ::placeholder {
            color: ${props => props.theme["base-label"]};
        }
    }
`;

import { SearchFormContainer } from "./styles";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

interface SearchFormProps {
	QtyPosts: number;
	setSearchText: (value: string) => void;
}

const searchFormSchema = z.object({
	query: z.string(),
});

type SearchFormInputs = z.infer<typeof searchFormSchema>;

export function SearchForm ({QtyPosts, setSearchText}:SearchFormProps) {
	const { register, watch, handleSubmit } = useForm<SearchFormInputs>({
		resolver: zodResolver(searchFormSchema),
	});

	function handleSearchIssues() {
		const searchText = watch("query");
		setSearchText(searchText);
	}

	return (
		<SearchFormContainer onSubmit={handleSubmit(handleSearchIssues)}>
			<div>
				<h3>Publicações</h3>
				<span>{QtyPosts + (QtyPosts === 1 ? " publicação" : " publicações")}</span>
			</div>

			<input 
				type="text" 
				placeholder="Buscar conteúdo" 
				{...register("query")} 
			/>
			
		</SearchFormContainer>
	);
}
*/