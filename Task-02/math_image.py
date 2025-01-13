import pytesseract
from PIL import Image
import re

# Function to extract and evaluate expressions
def calculate_from_image(image_path):
    try:
        # Load image and extract text
        image = Image.open(image_path)
        extracted_text = pytesseract.image_to_string(image)

        # Find mathematical expressions using regex
        expressions = re.findall(r'[\d+\-*/\(\)\.]+', extracted_text)

        results = []
        for expr in expressions:
            try:
                # Evaluate the mathematical expression
                result = eval(expr)
                results.append((expr, result))
            except Exception as e:
                results.append((expr, f"Error: {e}"))

        return results
    except Exception as e:
        return f"Error processing image: {e}"

# Path to your image
image_path = "/home/thepir0/project/image.png"

# Call the function and display results
results = calculate_from_image(image_path)
for expr, result in results:
    print(f"{expr} = {result}")
