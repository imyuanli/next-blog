const PageContainer = ({children}: any) => {
    return (
        <div className={'container pt-8 space-y-8'}>
            {children}
        </div>
    )
}

export default PageContainer