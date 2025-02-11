export const Metrics = ({ direction, metrics, rotate }) => {

    const addToEachElement = (inputList, number) => {
        let numberList = inputList.map(Number);
        return numberList.map(element => element + number)
    } ;
    const resutl = addToEachElement(metrics, 50)

    return (
        <section className={`w-full *:flex *:items-center *:gap-2  
                        ${(direction) ? "*:flex-row-reverse  " : "*:flex-row-"}  `}>
            {resutl.map((metric, index) => (
                <div 
                key={index}
                className="w-full ">
                    <div className={`w-[300px] bg-gray-200 rounded-full h-2.5 dark:bg-gray-700
                     ${rotate ? "origin-center rotate-180":""}`}>
                        <div className={`bg-yellow-400 h-2.5 rounded-full  `}
                            style={{
                                width: metric + "%"
                            }} >
                        </div>
                    </div>
                    <h2 className="w-[75px] text-center text-yellow-400">
                        {metric- 50}
                    </h2>
                </div>
            ))}
        </section>
    );
}