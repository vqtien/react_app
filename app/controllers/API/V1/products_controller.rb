class Api::V1::ProductsController < ApplicationController
  def index
    render json: Product.all
  end

  def create
    product = Product.create(product_params)
    render json: product
  end

  def destroy
    Product.destroy(params[:id])
  end

  def update
    product = Product.find(params[:id])
    product.update_attributes(product_params)
    render json: product
  end

  private

  def product_params
    params.require(:product).permit(:id, :name, :description, :price)
  end
end