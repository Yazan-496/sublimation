import Contact from '../components/Contact';
import DetailedServices from '../components/DetailedServices';

export default function AllServices() {
    return (
        <div className="flex flex-col min-h-screen">
            <DetailedServices />
            <Contact />
        </div>
    );
}
