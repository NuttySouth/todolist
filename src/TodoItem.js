import {parse, format, formatDistance} from 'date-fns';

export const toDoFactory = (name, description, priority, dueDate) => { 
    const formatDate = parse(dueDate, 'MM/dd/yyyy', new Date());
    const dateToString = format(formatDate, 'MM/dd/yyyy');
    const timeToDate = formatDistance(new Date(), formatDate);
    const getName = name;
    const getDescription = description;
    const getPriority = priority;
    return {getName, getDescription, getPriority, dateToString, timeToDate};
}

