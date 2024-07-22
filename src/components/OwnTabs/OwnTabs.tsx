import React, { FC, useState } from "react";
import "./OwnTabs.scss";
import { Review } from "../../redux/services/api";
import { Rate } from "antd";
import { setName, setComment, setRating, addReview, resetForm } from '../../redux/slices/reviewSlice';
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

interface OwnTabsProps {
	reviews: Review[];
	title: string;
    id:number
}


const OwnTabs: FC<OwnTabsProps> = ({ reviews, title, id }) => {
	const [tabActive, setTabActive] = React.useState<number>(0);
    const dispatch=useAppDispatch()
    const { name, comment, rating, error, textError, reviewsAdd } = useAppSelector((state) => state.reviews);
    const [localError, setLocalError] = useState<boolean>(false);
    const handleNameChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        const value = e.target.value;
        const regex = /^[a-zA-Z]*$/;

        if (!regex.test(value)) {
            setLocalError(true);
            return;
        }
        setLocalError(false);
        dispatch(setName(value));
    };

    const handleTextChange: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
        dispatch(setComment(e.target.value));
    };

    const handleRatingChange = (newRating: number) => {
        dispatch(setRating(newRating));
    };

    const submitHandler: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        if (comment.length <= 10) {
            return;
        }

        const newReview: Review = {
            author: name,
            date: new Date().toISOString(),
            content: comment,
            rating: rating,
        };

        dispatch(addReview({ id, review: newReview }));
        dispatch(resetForm());
    };

    const currentReviews = reviewsAdd[id] || [];
	// const [name, setName] = React.useState<string>("");
	// const [rating, setRating] = React.useState<number>(4);
	// const [comment, setComment] = React.useState<string>("");
    // const [textError, setTextError] = React.useState<string | null>(null);
    // const [error, setError] = React.useState<boolean>(false);
    // const [addReviews, setAddReviews] = React.useState<Record<string, Review[]>>({});

	// const handleNameChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    //     const value = e.target.value;
    //     const regex = /^[a-zA-Z]*$/; // Регулярное выражение для проверки только букв без пробелов
    
    //     if (!regex.test(value)) {
    //         setError(true)
    //         return;
    //     }
    //     setError(false);
    //     setName(value);

	// };
    // const handleTextChange: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    //     const value = e.target.value;
        
    //     // Устанавливаем комментарий независимо от длины
    //     setComment(value);

    //     // Устанавливаем ошибку, если длина текста <= 10
    //     if (value.length <= 10) {
    //         setTextError('Comment must be more than 10 characters long');
    //     } else {
    //         setTextError(null); // Сбрасываем ошибку, если длина текста больше 10 символов
    //     }
    // };
    // const handleRatingChange = (newRating: number) => {
    //     setRating(newRating);
    // };
    // const submitHandler: React.FormEventHandler<HTMLFormElement> = (e) => {
    //     e.preventDefault();
    //     if (comment.length <= 10) {
    //         return;
    //     }

    //     const newReview: Review = {
    //         author: name,
    //         date: new Date().toISOString(),
    //         content: comment,
    //         rating: rating
    //     };

      

    //     setAddReviews((prevReviews) => ({
    //         ...prevReviews,
    //         [id]: [...(prevReviews[id] || []), newReview]
    //     }));

    //     // Очистка формы после отправки
    //     setName("");
    //     setRating(0);
    //     setComment("");
    // };
    // const currentReviews = addReviews[id] || [];
	

	const tabs: string[] = [
		"Description",
		"Aditional information",
		` ${reviews.length + currentReviews.length === 1 ? "Review" : "Reviews" }(${reviews.length + currentReviews.length})`,
	];

	const handleTabChange = (index: number) => {
		setTabActive(index);
	};
	const formatDate = (dateString: string) => {
		const options: Intl.DateTimeFormatOptions = {
			day: "numeric",
			month: "long",
			year: "numeric",
		};
		const date = new Date(dateString);
		return new Intl.DateTimeFormat("en-US", options).format(date);
	};
	return (
		<div className="tabs">
			<div className="tabs__header">
				{tabs.map((tab, index) => {
					return (
						<button
							onClick={() => handleTabChange(index)}
							className={`tabs__btn ${
								tabActive === index ? "tab--active" : "tab--item"
							}`}
							key={index}
						>
							{tab}
						</button>
					);
				})}
			</div>
			<div className="tabs__info">
				{tabActive === 0 ? (
					<div className="tabs__descr">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
						soluta a quasi, ea, voluptas distinctio qui sed, tempore et
						doloribus libero perspiciatis? Tempora voluptates cum non sint?
						Voluptatum, aliquid beatae. Lorem ipsum dolor, sit amet consectetur
						adipisicing elit. Minima, asperiores ratione quia quibusdam ullam
						quo quaerat ipsum sed, placeat eius, alias adipisci doloremque
						maiores recusandae minus voluptas error. Exercitationem, non.
					</div>
				) : tabActive === 1 ? (
					<div className="additional">
						<div className="additional__item">
							<span className="additional__title">Weight: </span>
							<div className="additional__descr"> 0.3 kg</div>
						</div>
						<div className="additional__item">
							<span className="additional__title">Dimentions: </span>
							<div className="additional__descr"> 15 x 10 x 1 cm</div>
						</div>
						<div className="additional__item">
							<span className="additional__title">Colours:</span>
							<div className="additional__descr"> Black, Browns, White</div>
						</div>
						<div className="additional__item">
							<span className="additional__title">Material:</span>
							<div className="additional__descr"> Metal</div>
						</div>
					</div>
				) : (
					<div className="reviews">
						<div className="reviews__all-rev all-rev">
							<div className="all-rev__title title-reviews">
								Reviews for {title}
							</div>
							<div className="all-rev__list">
								{reviews.map((review, index) => (
									<div className="all-rev__item" key={index}>
										<div className="all-rev__header">
											<div className="all-rev__author">{review.author}</div>
											<div className="all-rev__date">
												{formatDate(review.date)}
											</div>
										</div>
										<div className="all-rev__rating">
											<Rate
												style={{
													color: "var(--main-text-color)",
													fontSize: "18px",
												}}
												disabled
												defaultValue={review.rating}
											/>
										</div>
										<div className="all-rev__text">{review.content}</div>
									</div>
								))}
                                {currentReviews?.map((review, index )=>{
                                    return(
                                        <div className="all-rev__item" key={index}>
										<div className="all-rev__header">
											<div className="all-rev__author">{review.author}</div>
											<div className="all-rev__date">
												{formatDate(review.date)}
											</div>
										</div>
										<div className="all-rev__rating">
											<Rate
												style={{
													color: "var(--main-text-color)",
													fontSize: "18px",
												}}
												// disabled
												defaultValue={review.rating}
											/>
										</div>
										<div className="all-rev__text">{review.content}</div>
									</div>
                                    )
                                })}
							</div>
						</div>

						<div className="reviews__add-rev">
							<div className="add-rev__title title-reviews">Add a Review</div>
							<div className="add-rev__info">
								Your email address will not be published. Required fields are
								marked *
							</div>
							<form onSubmit={submitHandler} className="add-rev__form">
								<textarea
									onChange={(e) => handleTextChange(e)}
									value={comment}
									name="textarea"
									placeholder="Your Review*"
									required
								/>
                                {textError && <div className="error">{textError}</div>  }
								<input
									onChange={(e) => handleNameChange(e)}
									value={name}
									type="text"
									className="add-rev__inp-name"
									required
									placeholder="Enter your name*"
                                    />
                                    {error && <div className="error">Name should contain only letters!</div>}
								<input
									type="email"
									className="add-rev__inp-email"
									required
									placeholder="Enter your Email*"
								/>

								<div className="add-rev__rating">
									<label>Your Rating*:</label>
									<Rate
										value={rating}
										onChange={handleRatingChange}
										style={{
											color: "var(--main-text-color)",
											fontSize: "18px",
										}}
									/>
								</div>
								<button type="submit">Submit</button>
							</form>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default OwnTabs;
