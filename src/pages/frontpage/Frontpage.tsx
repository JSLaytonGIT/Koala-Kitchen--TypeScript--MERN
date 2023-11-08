import { useState, useEffect } from 'react';
import Modal from '../../components/modal/Modal';
import mobileImage from './assets/mobile.png';
import Panel from '../../components/panel/Panel';
import ItemPanel from '../../components/itemPanel/ItemPanel';
import { southAsainFood } from './foodPanelObjects/southAsianFood';
import { westernFood } from './foodPanelObjects/westernFood';
import './Frontpage.scss';

const Frontpage = () => {
    const [activePanel, setActivePanel] = useState<number>(0);
    const [isModalOpen, setIsModalOpen] = useState(true);

    const closeModal = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        setIsModalOpen(true);
    }, []);

    const panelClickHandler = (panelId: number) => {
        setActivePanel(panelId);
    };

    interface panelItemObject {
        src: string;
        foodName: string;
        price: string;
    }

    const renderRows = (items: panelItemObject[]) => {
        const rows: JSX.Element[] = [];
        const itemsPerRow = 4;
        const numberOfRows = Math.ceil(items.length / itemsPerRow);
    
        for (let i = 0; i < numberOfRows; i++) {
            const startIndex = i * itemsPerRow;
            const endIndex = startIndex + itemsPerRow;
            const rowItems = items.slice(startIndex, endIndex);
        
            const row = (
                <div className="panel-row" key={i}>
                    {rowItems.map((item: panelItemObject, index: number) => (
                        <ItemPanel key={index} item={item} />
                    ))}
                </div>
            );
        
            rows.push(row);
        }
    
        return rows;
    };

    return (
        <div className="Frontpage">
            <Modal isOpen={isModalOpen} closeModal={closeModal} message="🛠👷 This website is currently under construction 👷🛠" title='Please note'/>
            <div className="first-section">
                <div className="text-content">
                    <h2><span className='delicious'>Delicious</span> Food Delivered To <span>Your</span> Doorstep</h2>
                    <h3>Welcome to the revolution of great food at low prices, delivered directly to your door!</h3>
                    <button className="GetStarted-button">Get Started</button>
                </div>
                <div className='right-image'>
                    <img src={mobileImage} alt='pan' style={{ width: '39vw', height: 'auto', transform: 'scaleX(-1) rotate(-3deg)' }} />
                </div>
            </div>
            <div className='second-section'>
                <div className='title'>Select a region</div>
                <div className='panels-container'>
                    <div onClick={() => panelClickHandler(1)}><Panel imageSrc='categories/curry.png' altText='South Asian' /></div>
                    <div onClick={() => panelClickHandler(2)}><Panel imageSrc='categories/pizza.png' altText='Western' /></div>
                    <div onClick={() => panelClickHandler(3)}><Panel imageSrc='categories/ramen.png' altText='East Asian' /></div>
                    <div onClick={() => panelClickHandler(4)}><Panel imageSrc='categories/americas.png' altText='Americas' /></div>
                </div>
                <div className='third-section'>
                    {activePanel === 1 && <div>{renderRows(southAsainFood)}</div>}
                    {activePanel === 2 && <div>{renderRows(westernFood)}</div>}
                    {activePanel === 3 && <div>Content for Panel 3</div>}
                    {activePanel === 4 && <div>Content for Panel 4</div>}
                </div>
            </div>
            <div className='footer'>
                
            </div>
        </div>
    );
}

export default Frontpage;