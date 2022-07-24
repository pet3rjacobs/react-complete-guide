function ExpenseDate(props) {
    const year = props.date.getFullYear();
    const day = props.date.toLocaleString('en-US', {day: '2-digit'});
    const month = props.date.toLocaleString('en-US', {month: 'long'});
return (
    <div>
                <div>{month}</div> 
                <div>{year}</div>
                <div>{day}</div>
    </div>
    );
}

export default ExpenseDate;