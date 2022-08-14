import classes from './PageHeaderContent.module.css';



const PageHeaderContent = (props) => {

    const {headerText, icon} = props;
    return(
        <div className={classes.wrapper}>
            <h2>{headerText}</h2>
            <span>{icon}</span>

        </div>
    )
}

export default PageHeaderContent;