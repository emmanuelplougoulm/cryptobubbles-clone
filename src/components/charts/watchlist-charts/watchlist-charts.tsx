	const [coinsList, setCoinsList] = useState();

	useEffect(() => {
		setCoinsList(coins);
	}, [coins]);

	const handleSearch = (inputValue) => {
		const prevList = coins;

		const newList = prevList.filter(({ name }) =>
			name.toLowerCase().includes(inputValue),
		);
		console.log("newList", newList);
		setCoinsList(newList);
	};

	const handleAdd = (id) => {
		console.log("id", id);

		const watchlists = localStorage.getItem("watchlists");

		if (watchlists) {
			const parsedWatchLists = JSON.parse(watchlists);

			const current = parsedWatchLists.filter(
				(list) => list.name === currentWatchlist,
			);

			console.log("current", current);
			current[0].items.push(id);

			localStorage.setItem("watchlists", JSON.stringify(parsedWatchLists));
		}
	};
			<div className="sidebar">
				<Input
					type="text"
					onChange={(event) => handleSearch(event.target.value)}
					placeholder="Search coin"
				/>
				<div className="coins-container">
					{coinsList?.map((item) => (
						<div key={item.id} className="single-coin">
							<div>{item.name}</div>
							<div className="add" onClick={() => handleAdd(item.id)}>
								++add coin
							</div>
						</div>
					))}
				</div>
			</div>
