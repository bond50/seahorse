import classes from './admin-sidebar.module.css'
import React from "react";
import Accordion2 from "../../reusables/Accordion2";
import {accordionFunction} from "../../reusables/functions/admin-accordion";
import AdminSidebarLink from "../../reusables/ui/admin-Sidebar-link";


const AdminSidebar = ({closed}) => {
    let attachedClasses = [classes.Sidebar, classes.CloseMobile];

    if (closed) {
        attachedClasses = [classes.Sidebar, classes.Close];
    }


    const serviceList = [
        {title: 'Categories', slug: 'crud/service-category'},
        {title: 'Create  page', slug: 'crud/'},
        {title: 'Update/delete a page', slug: 'crud/dynamic-pages'},
    ]

    const blogList = [
        {title: 'Categories', slug: 'crud/blog/category-tag'},
        {title: 'Tags', slug: 'crud/blog/category-tag'},
        {title: 'Write a blog', slug: 'crud/blog'},
        {title: 'Update/delete a blog', slug: 'crud/blog/blogs'},
    ]


    return (

        <aside className={attachedClasses.join(' ')}>
            <ul className={classes.SidebarList}>
                <li className={classes.NavHeading}>Dashboard</li>
                <AdminSidebarLink
                    title={'Admin home'}
                    slug={''}
                    icon={'house'}
                />
                <li
                    className={classes.NavHeading}>Quick links
                </li>


                <li
                    className={classes.NavHeading}>Pages
                </li>
                <AdminSidebarLink
                    title={'Customize Home page'}
                    slug={''} icon={'grid'}/>


                <Accordion2
                    title='Blog'
                    icon='journal-album'>
                    <>
                        {accordionFunction(blogList)}
                    </>
                </Accordion2>
                <Accordion2 title='Dynamic pages' icon='journal'>
                    <>
                        {accordionFunction(serviceList)}
                    </>
                </Accordion2>


            </ul>
        </aside>
    )
}


export default AdminSidebar;