---
sidebar_label: Оптимизация UMG
description: 'Docs related to the Docusaurus framework'
---

# Оптимизация

Для **Image** просчитываеться **Hit** (клики) для оптимизации в **Visibality** ставить **Not hit test**

Для скрытия элементов нужно использовать **Visibality** - **collapsed**, не **hidden** (просчитывает геометрию)

Не использвать **Bind**, т.к. вызываеться каждый тик, лучше использовать blueprint логику