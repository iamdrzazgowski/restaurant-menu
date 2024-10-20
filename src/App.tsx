import { useState } from 'react';
import './assets/styles/style.css';
import menuItems from './utils/menu';
import FilterMenu from './components/FilterMenu';
import MenuItems from './components/MenuItems';

function App() {
    const [filter, setFilter] = useState('all');

    const filteredItems = menuItems.filter(
        (item) => filter === 'all' || filter === item.type
    );

    return (
        <div className='wrapper'>
            <header>
                <h1>Restaurant Menu</h1>
                {/* Add filtering menu */}
                <FilterMenu setFilter={setFilter} />
            </header>
            <main>
                {/* Add fildered items */}
                <MenuItems items={filteredItems} />
            </main>
        </div>
    );
}

export default App;
