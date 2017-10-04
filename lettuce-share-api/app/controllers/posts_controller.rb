class PostsController < ApplicationController
  respond_to :json

  def index
    respond_with Post.all
  end

  def create
    @post = Post.new(post_params)
    @post.user_id = 1
    @post.category_id = 1
    @post.save!
  end

  private

  def post_params
    params.require(:post).permit(:description, :image)
  end
end
