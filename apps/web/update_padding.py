import os
import glob

app_dir = r"d:\Internship Projects\Ashwil trial\apps\web\src\app"
target_files = glob.glob(os.path.join(app_dir, "**", "*.tsx"), recursive=True)

target_pattern = """      <section className="pb-20">
        <div className="container-wide">
          <Breadcrumbs"""

replacement_pattern = """      <section className="py-12 md:py-11">
        <div className="container-wide">
          <Breadcrumbs"""

count = 0
for file_path in target_files:
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()
    
    if target_pattern in content:
        new_content = content.replace(target_pattern, replacement_pattern)
        with open(file_path, "w", encoding="utf-8") as f:
            f.write(new_content)
        count += 1
        print(f"Updated {file_path}")

print(f"Total files updated: {count}")
