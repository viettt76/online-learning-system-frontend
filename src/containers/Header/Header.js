import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faMagnifyingGlass, faHeart } from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';
import styles from './Header.module.scss';
import logo from '~/assets/imgs/VEdu.png';

import { userInfoSelector } from '~/store/selectors';
import AccountAvatar from '~/components/AccountAvatar';
import NoticeOfCourseList from '~/components/NoticeOfCourseList';

const courseList = [
    {
        img: 'https://th.bing.com/th/id/OIP.JWsuS6dzIXoA4wqfBSWyywHaEK?rs=1&pid=ImgDetMain',
        name: 'Digital Marketing Digital Marketing Digital Marketing Digital Marketing Digital Marketing Digital Marketing',
        price: '300.000d',
    },
    {
        img: 'https://th.bing.com/th/id/OIP.JWsuS6dzIXoA4wqfBSWyywHaEK?rs=1&pid=ImgDetMain',
        name: 'Digital Marketing Digital Marketing Digital Marketing Digital Marketing Digital Marketing Digital Marketing',
        price: '300.000d',
    },
];

const courseList2 = [
    {
        img: 'https://th.bing.com/th/id/OIP.MdOfxiQLOKSYowdtAqT19gHaFj?w=1024&h=768&rs=1&pid=ImgDetMain',
        name: 'Digital Marketing Digital Marketing Digital Marketing Digital Marketing Digital Marketing Digital Marketing',
        price: '300.000d',
    },
    {
        img: 'https://th.bing.com/th/id/OIP.MdOfxiQLOKSYowdtAqT19gHaFj?w=1024&h=768&rs=1&pid=ImgDetMain',
        name: 'Digital Marketing Digital Marketing Digital Marketing Digital Marketing Digital Marketing Digital Marketing',
        price: '300.000d',
    },
];

const Header = () => {
    const userInfo = useSelector(userInfoSelector);
    return (
        <div className={clsx(styles['header'])}>
            <Link to="/">
                <img width={50} height={50} src={logo} alt="VEdu" />
            </Link>
            <div className={clsx(styles['search-wrapper'])}>
                <input placeholder="Tìm tên khoá học" />
                <button className={clsx(styles['search-button'])}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
            {userInfo?.emailVerified ? (
                <div className={clsx(styles['user-actions'])}>
                    <NoticeOfCourseList
                        title="Khoá học yêu thích"
                        courseList={courseList}
                        icon={faHeart}
                        textWhenEmpty="Danh sách mong ước của bạn đang trống."
                        textLinkWhenEmpty="Khám phá các khoá học"
                        linkWhenEmpty="/"
                    />
                    <NoticeOfCourseList
                        title="Giỏ hàng"
                        courseList={courseList2}
                        icon={faCartShopping}
                        textWhenEmpty="Giỏ hàng của bạn đang trống."
                        textLinkWhenEmpty="Tiếp tục mua sắm"
                        linkWhenEmpty="/cart"
                    />
                    <AccountAvatar className={clsx(styles['user-action'])} userInfo={userInfo} />
                </div>
            ) : (
                <div>
                    <Link className={clsx('btn btn-dark font-weight-bold text-nowrap')} to="/login">
                        Đăng nhập
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Header;
