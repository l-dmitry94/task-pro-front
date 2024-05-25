import { useEffect, useMemo } from 'react';
import BoardItem from './BoardItem';
import scss from './Boards.module.scss';
import { useNavigate } from 'react-router-dom';

const Boards = () => {
    const navigate = useNavigate();

    const boards = useMemo(
        () => [
            {
                icon: 'icon-project',
                title: 'Project office',
            },
            {
                icon: 'icon-puzzle',
                title: 'Neon Light Project',
            },
        ],
        []
    );

    useEffect(() => {
        const LSBoards = localStorage.getItem('ACTIVE_BOARD');

        if (!LSBoards) {
            navigate(`/home/${boards[0].title}`);
        }
    }, [boards, navigate]);

    return (
        <ul className={scss.boardsList}>
            {boards.map(({ icon, title }) => (
                <BoardItem key={title} icon={icon} title={title} />
            ))}
        </ul>
    );
};

export default Boards;
