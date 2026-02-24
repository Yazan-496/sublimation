import Contact from '../components/Contact';
import Services from '../components/Services';

export default function PrintingService() {
    return (
        <div className="flex flex-col min-h-screen">
            <Services />
            <Contact />
        </div>
    );
}
