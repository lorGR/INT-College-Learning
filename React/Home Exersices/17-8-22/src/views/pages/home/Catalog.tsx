import CatalogItem from "./CatalogItem";
const { v4: uuidv4 } =require ('uuid');


const Catalog = () => {
    // const catalog = ['t-shirts', 'pants', 'shoes', 'accessories'];
    const catalog = [
        {
            type: 'tshirts',
            id: uuidv4()
        },
        {
            type: 'pants',
            id: uuidv4()
        },
        {
            type: 'shoes',
            id: uuidv4()
        },
        {
            type: 'accessories',
            id: uuidv4()
        },
        {
            type: 'accessories',
            id: uuidv4()
        },
        {
            type: 'accessories',
            id: uuidv4()
        }
    ]
    return (
        <div className="catalog">
            {catalog.map(item => {
                return (
                    <CatalogItem type={item.type} key={item.id} />
                );
            })}
        </div>
    );
}

export default Catalog;