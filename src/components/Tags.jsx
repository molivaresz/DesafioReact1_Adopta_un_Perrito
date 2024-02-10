import Badge from 'react-bootstrap/Badge';

const Tags = (props) => {
    return (
        <>
        <Badge className='badge_sty' bg={props.badgecolor}>{props.dogbreed}</Badge>
        </>
    )
}

    export default Tags