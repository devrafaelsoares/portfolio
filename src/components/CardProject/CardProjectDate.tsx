interface CardProjectDateProps {
    date: Date;
}

export default function Index({ date }: CardProjectDateProps) {
    return (
        <header className="header">
            <div className="date">
                <span className="day">{date.toLocaleDateString()}</span>
            </div>
        </header>
    );
}
