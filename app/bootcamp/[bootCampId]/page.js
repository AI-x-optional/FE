async function getBootCampDetail({ bootCampId }) {
    const response = await fetch(`api 주소`);

    if (response.ok) {
        return await response.json()
    } else {
        Error("Data fetching error");
    }
}

export default async function BootCampDetail({ params }) {
    //const bootCampDetail = await getBootCampDetail(params.bootCampId);

    return (
        <p>BootCampDetail 페이지</p>
    )
}
