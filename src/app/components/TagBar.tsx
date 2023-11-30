interface Category {
	id: string,
	name: string
}

interface TagBarProps {
	categories: Category[],
	selectedTags: string[],
	onSetSelectedTags: (selectedTags: string[]) => void
}

export function TagBar({categories, selectedTags, onSetSelectedTags}: TagBarProps) {
	const selectedAllTag = "all";
	/*const [categories, setCategories] = useState<Category[]>([]);

	const fetchCategories = useCallback(async () => {
		const data = await fetch("http://localhost:3000/api/categories", 
			{ cache: "force-cache" }
		)
			.then(res => res.json());

		setCategories(data.categories);
	}, []);

	useEffect(() => {
		fetchCategories();
	}, [fetchCategories]);
	*/
	function handleChangeSelectTag(id: string, selected: boolean) {
		if (selected) {
			if (id !== selectedAllTag) {
				const newSelectedTags = selectedTags.filter(tag => tag !== selectedAllTag);
				onSetSelectedTags([...newSelectedTags, id]);
			} else {
				onSetSelectedTags([id]);
			}
		} else {
			const newSelectedTags = selectedTags.filter(tag => tag !== id);
			onSetSelectedTags(newSelectedTags);	
		}
	}

	const selectAll = selectedTags.includes(selectedAllTag);

	return (
		<div className="flex flex-row flex-wrap gap-3 mt-10">		
			<button onClick={() => handleChangeSelectTag(selectedAllTag, !selectAll)} className={`${selectAll ? "bg-purple-200 text-gray-100" : "shadow-tag text-purple-100"} px-4 py-1 rounded-full text-base leading-base hover:text-gray-100 hover:bg-purple-200 hover:shadow-tag`}>
				Tudo
			</button>	

			{categories.map(category => {
				const selected = selectedTags.includes(category.id);

				return (
					<button key={category.id} onClick={() => handleChangeSelectTag(category.id, !selected)} className={`${selected ? "bg-purple-200 text-gray-100" : "shadow-tag text-purple-100"} px-4 py-1 rounded-full text-base leading-base hover:text-gray-100 hover:bg-purple-200 hover:shadow-tag`}>
						{category.name}
					</button>	
				);
			})}
		</div>
	);
}