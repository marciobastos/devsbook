import React from 'react';
import { Container,
        ProductPhotoArea,
        ProductInfoArea,
        ProductButtonArea,
        ProductPhoto,
        ProductName,
        ProductPrice,
        ProductIngredientes,
        ProductButton
} from './styled';

export default ({data, onClick})=>{

    const handleClick = ()=> {
        onClick(data);
    }

    return(
        <Container onClick={handleClick}>
            <ProductPhotoArea>
                <ProductPhoto src={data.image}/>
            </ProductPhotoArea>
            <ProductInfoArea>
                <ProductName>{data.name}</ProductName>
                <ProductPrice>R$ {data.price}</ProductPrice>
                <ProductIngredientes>{data.ingredients}</ProductIngredientes>
            </ProductInfoArea>
            <ProductButtonArea>
                <ProductButton src="/assets/next.png"/>
            </ProductButtonArea>
        </Container>

    );


}