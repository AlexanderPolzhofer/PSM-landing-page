import React from 'react';
import {
    CardComponentWrapper,
    CardComponent,
    CardBody,
    CardItemTextSection
} from '../app-styles/App.styles';

export default function Card() {
    return (
        <CardComponentWrapper>
            <CardComponent>
                <CardBody>
                    <CardItemTextSection>
                        <h3>Lorem Ipsum</h3>
                        <h6>Amet excepteur nulla cillum pariatur culpa culpa ullamco officia. Incididunt eiusmod aliqua exercitation ut dolore esse anim in pariatur officia nulla laborum anim et. Minim non commodo deserunt exercitation sunt nisi officia qui esse proident. Sit dolor reprehenderit sint ullamco mollit ea magna cupidatat est qui nulla occaecat excepteur. Cillum mollit magna nulla sint consectetur dolor pariatur voluptate officia tempor velit tempor eu aliqua.</h6>
                    </CardItemTextSection>
                    <img src={process.env.PUBLIC_URL + '/images/psm_add_paket.jpg'} alt='add-paket-img' height='50%' width='50%' />
                </CardBody>
            </CardComponent>
        </CardComponentWrapper>
    )
};