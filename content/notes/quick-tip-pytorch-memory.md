---
title: "PyTorch Memory Optimization Tips"
date: "2024-01-18"
description: "Quick tips for reducing GPU memory usage in PyTorch."
tags: ["PyTorch", "Performance"]
published: true
---

# PyTorch Memory Optimization Tips

## 1. Use `torch.no_grad()` for inference

```python
with torch.no_grad():
    output = model(input)
```

## 2. Clear cache when switching tasks

```python
torch.cuda.empty_cache()
```

## 3. Use gradient checkpointing for large models

```python
from torch.utils.checkpoint import checkpoint
output = checkpoint(model.layer, input)
```

## 4. Mixed precision training

```python
from torch.cuda.amp import autocast
with autocast():
    output = model(input)
```
