using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEditor;
using System;
using System.Runtime.InteropServices;

[InitializeOnLoad]
public class Menus
{
    [MenuItem("Firehorse/Reload VS")]
    public static void Reload()
    {
        var currentBuildTarget = EditorUserBuildSettings.selectedBuildTargetGroup;

        var currentDefines = PlayerSettings.GetScriptingDefineSymbolsForGroup(currentBuildTarget);

        PlayerSettings.SetScriptingDefineSymbolsForGroup(currentBuildTarget, currentDefines + " - RELOAD");
        PlayerSettings.SetScriptingDefineSymbolsForGroup(currentBuildTarget, currentDefines);
    }
}