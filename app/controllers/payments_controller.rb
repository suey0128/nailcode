class PaymentsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def index
        payments = Payment.all
        render json: payments
    end

    def create
        payment = Payment.create!(payment_params)
        render json: payment
    end

    private

    def payment_params
        params.require(:payment).permit(:user_id, :shopping_cart_id, :total, :subtotal, :tax, :shipping)
    end

    def render_not_found_response
        render json: {error: "Shopping cart not found"}, status: :not_found
    end

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end
end
