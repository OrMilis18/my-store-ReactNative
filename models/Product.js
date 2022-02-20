export default class Product{
    constructor(id,categoryId,title,price,img,sizeAndWeight,description,opinion){
        this.id=id;
        this.categoryId=categoryId;
        this.title=title;
        this.price=price;
        this.img=img;
        this.sizeAndWeight=sizeAndWeight;
        this.description=description;
        this.opinion=opinion;
    };
};