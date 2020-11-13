let visitCount = 0;

const updateVisitCount = () => {
    fetch('https://api.countapi.xyz/update/filip-dev/portfolio/?amount=1')
        .then(res => res.json())
        .then(res => {
            visitCount = res.value;
        })
}

updateVisitCount();

export default visitCount;