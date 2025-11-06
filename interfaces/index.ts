// Card Props Interface
export interface CardProps {
  image: string;
  title: string;
  description: string;
  price: string;
}

// Button Props Interface
export interface ButtonProps {
  label: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
}
