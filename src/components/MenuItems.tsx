interface MenuItem {
    title: string;
    image: string;
    price: number;
    description: string;
}

function MenuItems({ items }: { items: MenuItem[] }) {
    return items.map((item) => (
        <article className='menu-item' key={item.title}>
            <div className='img-block'>
                <img src={item.image} alt={item.title} />
            </div>

            <div className='item-info'>
                <header>
                    <h2>{item.title}</h2>
                    <h2 className='price'>${item.price}</h2>
                </header>
                <p className='item-description'>{item.description}</p>
            </div>
        </article>
    ));
}

export default MenuItems;
