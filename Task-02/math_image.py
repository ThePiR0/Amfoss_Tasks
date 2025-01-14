import pytesseract
from PIL import Image
import re


def calculate_from_image(image_path):
    try:
        image = Image.open(image_path)
        extracted_text = pytesseract.image_to_string(image)

        expressions = re.findall(r'[\d+\-*/\(\)\.]+', extracted_text)

        results = []
        for expr in expressions:
            try:
                result = eval(expr)
                results.append((expr, result))
            except Exception as e:
                results.append((expr, f"Error: {e}"))

        return results
    except Exception as e:
        return f"Error processing image: {e}"

image_path = "/home/thepir0/project/image.png"

results = calculate_from_image(image_path)
for expr, result in results:
    print(f"{expr} = {result}")
