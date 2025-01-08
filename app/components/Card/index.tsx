interface CardsProps {
    country: string;
    capital: string;
    region: string;
    population: string;
}

const Card = ({country, capital, region, population}: CardsProps) => {
    return (
        <div className="h-full bg-white rounded-lg shadow-lg">
            <div className="aspect-video w-full">
                <img className="w-full h-full object-cover" src="https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM="/>
            </div>
            <div className="p-6 text-sm text-gray-600">
                <h2 className="text-xl font-semibold mb-4">{country}</h2>
                <div className="space-y-2">
                    <div>
                        <span className="font-semibold">Capital:</span> {capital}
                    </div>
                    <div>
                        <span className="font-semibold">Region:</span> {region}
                    </div>
                    <div>
                        <span className="font-semibold">Population:</span> {population}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card