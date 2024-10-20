function FilterMenu({ setFilter }: { setFilter: (filter: string) => void }) {
    return (
        <nav className='filter-menu'>
            <button
                type='button'
                className='filter-btn'
                onClick={() => setFilter('all')}>
                All
            </button>
            <button
                type='button'
                className='filter-btn'
                onClick={() => setFilter('Breakfast')}>
                Breakfast
            </button>
            <button
                type='button'
                className='filter-btn'
                onClick={() => setFilter('Lunch')}>
                Lunch
            </button>
            <button
                type='button'
                className='filter-btn'
                onClick={() => setFilter('Dinner')}>
                Dinner
            </button>
            <button
                type='button'
                className='filter-btn'
                onClick={() => setFilter('Drink')}>
                Drinks
            </button>
        </nav>
    );
}

export default FilterMenu;
