import { useNavigate } from 'react-router-dom';
import Parse from 'html-react-parser';

export function AllArticleList({ articleData }) {
    const navigate = useNavigate();
    const maxDescriptionLength = 100;

    const handleClick = (articleId) => {
        navigate(`/article/${articleId}`); // Mengarahkan ke halaman detail artikel
    };

    return (
        <>
            <div className="cards-article flex flex-wrap gap-5 my-5">
                {articleData.map((data, i) => (
                    <div
                        onClick={() => handleClick(data.id)} // Mengarahkan ke halaman detail artikel
                        className="card flex items-center gap-8 w-full max-h-[150px] min-h-[150px] border border-[#D9D9D9] rounded-[10px] cursor-pointer"
                        key={i}
                    >
                        <img
                            className="rounded-[10px] w-[200px] max-h-[150px] object-cover"
                            src={data.img_url}
                            alt=""
                        />
                        <div className="wrapper-body-content">
                            <p className="title text-2xl font-extrabold w-max-3xl">
                                {data.title}
                            </p>
                            <p className="text-lg font-normal">
                                {Parse(data.description.length > maxDescriptionLength ? data.description.slice(0, maxDescriptionLength) + "..." : data.description)}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
