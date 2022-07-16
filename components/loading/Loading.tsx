const Loading = () => {
    return (
        <div className='flex gap-5 justify-center items-center h-72'>
            <section className="p-5 border border-red-500 rounded-lg bg-gray-100 flex items-center gap-5">
                <span className='text-5xl'> Loading </span>
                <i className='bi bi-arrow-clockwise text-4xl animate-spin' />
            </section>
        </div>
    )
}

export default Loading;
