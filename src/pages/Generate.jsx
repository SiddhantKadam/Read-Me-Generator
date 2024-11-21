import { useLocation } from 'react-router-dom';
import Card from '../component/card/Card';
import Aurora from '../component/templatesMarkdown/aurora/aurora';
import Ethereal from '../component/templatesMarkdown/ethereal/ethereal';
import Lumos from '../component/templatesMarkdown/lumos/lumos';

const Generate = () => {

    const location = useLocation();
    const { heading } = location.state || {};

    return (
        <div>
            <div className="grid grid-cols-3 gap-4 justify-items-center items-center h-full">
                <div className="flex justify-center">
                    <button className="primary-button flex items-center justify-center pr-6 pl-3 py-2 font-semibold w-60">
                        <img src={`../icons/back.png`} className="w-5 h-5 mr-2" alt="Preview Icon" />
                        Back to Edit
                    </button>
                </div>
                <div className="flex justify-center">
                    <button className="primary-button flex items-center justify-center pr-6 pl-3 py-2 font-semibold w-60">
                        <img src={`../icons/downloading.png`} className="w-5 h-5 mr-2" alt="Preview Icon" />
                        Copy code
                    </button>
                </div>
                <div className="flex justify-center">
                    <button className="primary-button flex items-center justify-center pr-6 pl-3 py-2 font-semibold w-60">
                        <img src={`../icons/link.png`} className="w-5 h-5 mr-2" alt="Preview Icon" />
                        Download code
                    </button>
                </div>
            </div>

            <div className='mt-6'>
                <Card>
                    {heading === "Aurora" && <Aurora />}
                    {heading === "Ethereal" && <Ethereal />}
                    {heading === "Lumos" && <Lumos />}
                </Card>
            </div>

        </div>
    )
}

export default Generate