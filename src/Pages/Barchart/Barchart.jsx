import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend, ResponsiveContainer } from 'recharts';



const Barchart = ({ratings}) => {
    
    
    return (
        <div>
            <div style={{ width: '100%', height: 400 }}>
                <ResponsiveContainer>
                    <BarChart
                        data={ratings}
                        layout="vertical" 
                        margin={{ top: 20, right: 30, left: 80, bottom: 20 }}
                    >
                        <CartesianGrid />
                        <XAxis type="number" />   
                        <YAxis dataKey="name" type="category" /> 
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="count" fill="#8884d8" barSize={20} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Barchart;