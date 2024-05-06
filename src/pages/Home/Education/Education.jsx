const Education = () => {
    return (
        <div className='mx-24 text-center'>
            <hr className="border border-b-2 border-indigo-100" />
            <div className="my-16 grid md:grid-cols-3 md:items-center justify-items-center">
                <h1 className="underline underline-offset-4 decoration-indigo-600 uppercase text-xl md:col-span-1">Education</h1>
                <div className="md:col-span-2">
                    <h1 className="font-extrabold text-xl">Bachelor of Business Administration</h1>
                    <h4>National University Bangladesh • 2022-present</h4>
                    <h1 className="font-extrabold text-xl mt-5">Higher Secondary Certificate</h1>
                    <h4>Moulana Bhasani College • 2021</h4>
                </div>
            </div>
            <hr className="border border-b-2 border-indigo-100" />
        </div>
    );
};

export default Education;